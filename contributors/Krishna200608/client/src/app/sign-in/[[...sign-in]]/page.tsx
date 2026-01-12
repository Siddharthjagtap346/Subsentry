'use client';

import { SignIn } from '@clerk/nextjs';
import AuthLayout from '../../components/auth/AuthLayout';

export default function Page() {
  return (
    <AuthLayout mode="sign-in">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'w-full',
            card: 'bg-transparent shadow-none p-0',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton:
              'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300',
            socialButtonsBlockButtonText: 'text-white font-medium',
            dividerLine: 'bg-gray-700',
            dividerText: 'text-gray-500',
            formFieldLabel: 'text-gray-300',
            formFieldInput:
              'bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20',
            formButtonPrimary:
              'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
            footerActionLink: 'text-blue-400 hover:text-blue-300',
            identityPreviewEditButton: 'text-blue-400 hover:text-blue-300',
            formFieldAction: 'text-blue-400 hover:text-blue-300',
            alertText: 'text-red-400',
            formFieldInputShowPasswordButton: 'text-gray-400 hover:text-white',
          },
          layout: {
            socialButtonsPlacement: 'top',
            socialButtonsVariant: 'blockButton',
          },
        }}
      />
    </AuthLayout>
  );
}
