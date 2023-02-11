import * as echarts from 'echarts'
import { XAXisComponentOption, YAXisComponentOption } from 'echarts'
import { TitleComponentOption, TooltipComponentOption, GridComponentOption, LegendComponentOption } from 'echarts/components' // 组件
import { BarSeriesOption, LineSeriesOption, PieSeriesOption, FunnelSeriesOption, GaugeSeriesOption } from 'echarts/charts'
type Options = LineECOption | BarECOption | PieECOption | FunnelOption
type BaseOptionType = XAXisComponentOption | YAXisComponentOption | TitleComponentOption | TooltipComponentOption | LegendComponentOption | GridComponentOption
type BaseOption = echarts.ComposeOption<BaseOptionType>
type LineECOption = echarts.ComposeOption<LineSeriesOption | BaseOptionType>
type BarECOption = echarts.ComposeOption<BarSeriesOption | BaseOptionType>
type PieECOption = echarts.ComposeOption<PieSeriesOption | BaseOptionType>
type FunnelOption = echarts.ComposeOption<FunnelSeriesOption | BaseOptionType>
type GaugeECOption = echarts.ComposeOption<GaugeSeriesOption | GridComponentOption>
type EChartsOption = echarts.EChartsOption
type ChartType = 'bar' | 'line' | 'pie' | 'gauge'
export {
  BaseOption,
  ChartType,
  LineECOption, //
  BarECOption,
  Options,
  PieECOption,
  FunnelOption,
  GaugeECOption,
  EChartsOption,
}
