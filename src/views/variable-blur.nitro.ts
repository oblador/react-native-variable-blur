import type {
  HybridView,
  HybridViewProps,
  HybridViewMethods,
} from 'react-native-nitro-modules'

export interface VariableBlurProps extends HybridViewProps {
   isRed: boolean
}

export interface VariableBlurMethods extends HybridViewMethods {}

export type VariableBlur = HybridView<VariableBlurProps, VariableBlurMethods, { ios: 'swift' }>