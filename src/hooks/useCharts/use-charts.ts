import { ChartType } from './type'
import * as echarts from 'echarts/core'
import { ShallowRef, Ref } from 'vue'
import { TitleComponent, LegendComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent } from 'echarts/components'
import { BarChart, LineChart, PieChart, GaugeChart } from 'echarts/charts'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
// 异步导入options中的所有默认配置项
const optionsModules = import.meta.glob<{ default: echarts.EChartsCoreOption }>('./options/**.ts')
interface ChartHookOption {
  type?: Ref<ChartType>
  el: ShallowRef<HTMLElement>
}
/**
 *  视口变化时echart图表自适应调整
 */
class ChartsResize {
  #charts = new Set<echarts.ECharts>() // 缓存已经创建的图表实例
  #timeId = null
  constructor() {
    window.addEventListener('resize', this.handleResize.bind(this)) // 视口变化时调整图表
  }
  getCharts() {
    return [...this.#charts]
  }
  handleResize() {
    clearTimeout(this.#timeId)
    this.#timeId = setTimeout(() => {
      this.#charts.forEach(chart => {
        chart.resize()
      })
    }, 500)
  }
  add(chart: echarts.ECharts) {
    this.#charts.add(chart)
  }
  remove(chart: echarts.ECharts) {
    this.#charts.delete(chart)
  }
  removeListener() {
    window.removeEventListener('resize', this.handleResize)
  }
}
export const chartsResize = new ChartsResize()
// 注册创建echarts实例
export const useCharts = ({ type, el }: ChartHookOption) => {
  echarts.use([
    BarChart,
    LineChart,
    BarChart,
    PieChart,
    GaugeChart,
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
  ])
  const charts = shallowRef<echarts.ECharts>()
  let options!: echarts.EChartsCoreOption
  //根据要创建的图表类型，加载对应的默认配置项
  const getOptions = async () => {
    const moduleKey = `./options/${type.value}.ts`
    const { default: defaultOption } = await optionsModules[moduleKey]()
    return defaultOption
  }
  //更新图表
  const setOptions = (opt: echarts.EChartsCoreOption) => {
    charts.value.setOption(opt)
  }
  const initChart = async () => {
    charts.value = echarts.init(el.value)
    options = await getOptions()
    charts.value.setOption(options)
    chartsResize.add(charts.value) // 将图表实例添加到缓存中
  }
  onBeforeUnmount(() => {
    chartsResize.remove(charts.value) // 移除缓存
  })
  return {
    charts,
    setOptions,
    initChart,
  }
}
export const chartsOptions = <T extends echarts.EChartsCoreOption>(option: T) => shallowReactive<T>(option)
