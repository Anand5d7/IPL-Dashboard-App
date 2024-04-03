// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#00c49F', '#FF8042', '#FFBB28']

const PieChart = props => {
  const {data} = props
  return (
    <div className="pie-chart-bg-container">
      <PieChartComponent width={400} height={350}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChartComponent>
    </div>
  )
}

export default PieChart
