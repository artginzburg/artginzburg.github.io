import useSWR, { BareFetcher } from 'swr';

import type { PublicConfiguration } from 'swr/_internal';

import { statsUrl } from '../utils/data';
import { fetcher } from './fetcher';

type StatsFetcherData = {
  githubDownloads: number;
  wakatimeMinutes: number;
  npmDownloads: number;
  mustappHours: number;
};

const fallbackData: StatsFetcherData = {
  githubDownloads: 54298,
  wakatimeMinutes: 19191,
  npmDownloads: 9742,
  mustappHours: 1932.2,
};

export function useStatsFetcherData(
  config?: Partial<PublicConfiguration<StatsFetcherData, any, BareFetcher<StatsFetcherData>>>,
) {
  const { data } = useSWR<StatsFetcherData>(statsUrl, fetcher, {
    fallbackData,
    ...config,
  });

  return data;
}
