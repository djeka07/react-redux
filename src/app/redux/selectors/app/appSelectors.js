import { APPNAME as NAME } from '../../types'

export const appSettingsSelector = state => state[NAME]
export const languageSelector = state => appSettingsSelector(state).language
