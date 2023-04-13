import useSWR from 'swr';
import type { BareFetcher, PublicConfiguration } from 'swr/_internal';

import { htmlFetcher } from './htmlFetcher';

export function useStargazers(
  username: string,
  config?: Partial<PublicConfiguration<string, any, BareFetcher<string>>>,
) {
  const { data } = useSWR(`https://img.shields.io/github/stars/${username}`, htmlFetcher, config);

  const match = data?.match(/<title>stars: (?<stars>.*)<\/title>/)?.groups;

  const stars = match?.stars;

  return stars;
}
