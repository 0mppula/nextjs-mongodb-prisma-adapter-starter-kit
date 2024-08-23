import db from '@/lib/db';
import { getGitHubCredentials, getGoogleCredentials, getNextAuthSecret } from '@/lib/utils';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions, getServerSession } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(db),
	providers: [
		GoogleProvider({
			clientId: getGoogleCredentials().clientId,
			clientSecret: getGoogleCredentials().clientSecret,
		}),
		GitHubProvider({
			clientId: getGitHubCredentials().clientId,
			clientSecret: getGitHubCredentials().clientSecret,
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	callbacks: {
		async jwt({ token }) {
			const db_user = await db.user.findFirst({
				where: {
					email: token?.email as string,
				},
			});

			if (db_user) {
				token.id = db_user.id;
			}

			return token;
		},
		async session({ token, session }) {
			if (token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
			}

			return session;
		},
	},
	debug: process.env.NODE_ENV === 'development',
	secret: getNextAuthSecret(),
	pages: { signIn: '/' },
};

export const getAuthSession = () => {
	return getServerSession(authOptions);
};
