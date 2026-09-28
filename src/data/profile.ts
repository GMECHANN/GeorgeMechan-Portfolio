export const profile = {
  name: 'George Mechan',
  location: 'Peru',
  email: 'gmechangarcia@gmail.com',
  github: 'https://github.com/GMECHANN',
  linkedin: 'https://www.linkedin.com/in/george-mechan/',
  fiverr: 'https://www.fiverr.com/gmechann',
  freelancer: 'https://www.freelancer.es/u/georgemechan3',
  workana: '',
} as const;

export type SocialKey = 'github' | 'linkedin' | 'fiverr' | 'freelancer' | 'workana';

const socialLabels: Record<SocialKey, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  fiverr: 'Fiverr',
  freelancer: 'Freelancer',
  workana: 'Workana',
};

export const socialLinks = (Object.keys(profile) as Array<keyof typeof profile>)
  .filter((key): key is SocialKey => ['github', 'linkedin', 'fiverr', 'freelancer', 'workana'].includes(key) && Boolean(profile[key]))
  .map((key) => ({ key, label: socialLabels[key], href: profile[key] }));
