import { getHostComponent, type HybridRef } from 'react-native-nitro-modules'
import VariableBlurConfig from '../nitrogen/generated/shared/json/VariableBlurConfig.json'
import type {
  VariableBlurProps,
  VariableBlurMethods,
} from './views/variable-blur.nitro'


export const VariableBlur = getHostComponent<VariableBlurProps, VariableBlurMethods>(
  'VariableBlur',
  () => VariableBlurConfig
)

export type VariableBlurRef = HybridRef<VariableBlurProps, VariableBlurMethods>
