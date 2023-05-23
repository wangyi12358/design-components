import type { FC } from 'react';
import React, { useContext } from 'react';
import enUS from './locales/en-US';

type Config = {
  locale: typeof enUS;
};

export const defaultConfigRef: {
  current: Config;
} = {
  current: {
    locale: enUS,
  },
};

export function setDefaultConfig(config: Config) {
  defaultConfigRef.current = config;
}

export function getDefaultConfig() {
  return defaultConfigRef.current;
}

const ConfigContext = React.createContext<Config | null>(null);

export type ConfigProviderProps = {
  children?: React.ReactNode;
} & Partial<Config>;

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { children, ...config } = props;
  const parentConfig = useConfig();

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig();
}
