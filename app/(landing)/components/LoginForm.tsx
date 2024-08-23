'use client';

import { ButtonWithIcon } from '@/components/ButtonWithIcon';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'sonner';

const LoginForm = () => {
	const [googleIsLoading, setGoogleIsLoading] = useState(false);
	const [githubIsLoading, setGithubIsLoading] = useState(false);

	const socialAction = async (provider: string) => {
		if (provider === 'google') {
			setGoogleIsLoading(true);
		}

		if (provider === 'github') {
			setGithubIsLoading(true);
		}

		await signIn(provider, {
			callbackUrl: '/welcome',
			redirect: true,
		}).then((callback) => {
			if (callback?.error) {
				toast.error('An error occurred while trying to login. Please try again.');
			}
		});
	};

	return (
		<form
			className="gap-4 flex flex-col mt-4 lg:mt-8 p-6 sm:px-10 w-full max-w-lg rounded-xl border bg-card text-card-foreground shadow"
			onSubmit={(e) => e.preventDefault()}
		>
			<ButtonWithIcon
				loading={googleIsLoading}
				disabled={googleIsLoading || githubIsLoading}
				type="button"
				className="w-full"
				icon={FaGoogle}
				onClick={() => socialAction('google')}
			>
				Continue with Google
			</ButtonWithIcon>

			<ButtonWithIcon
				loading={githubIsLoading}
				disabled={googleIsLoading || githubIsLoading}
				type="button"
				className="w-full"
				icon={FaGithub}
				onClick={() => socialAction('github')}
			>
				Continue with Github
			</ButtonWithIcon>
		</form>
	);
};

export default LoginForm;
