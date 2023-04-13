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

export function useStatsFetcherData(config?: Partial<PublicConfiguration<StatsFetcherData, any, BareFetcher<StatsFetcherData>>> | undefined) {
  const { data } = useSWR<StatsFetcherData>(statsUrl, fetcher, config);

  return data;
}
