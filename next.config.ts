import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default async function nextConfig(phase: string): Promise<NextConfig> {
  if (phase !== PHASE_DEVELOPMENT_SERVER)
    return {};

  const { codeInspectorPlugin } = await import('code-inspector-plugin');

  return {
    turbopack: {
      rules: codeInspectorPlugin({ bundler: 'turbopack' }),
    },
  };
}
