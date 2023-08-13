import type { IMeteoItem } from "@/shared/types"
import { WeatherMeteoItem } from "@/entities/Weather"

interface IMeteoListProps {
  items?: Array<IMeteoItem>
}

const MeteoList: React.FC<IMeteoListProps> = ({ items }) => {
  return (
    <div className="weather__detail detail__weather weather__block">
      <ul className="detail__list">
        {
          items?.map((item, idx) =>
            <WeatherMeteoItem
              icon={item.icon}
              title={item.title}
              body={item.body}
              key={idx}
            />
          )
        }
      </ul>
    </div>
  )
}

// °

export default MeteoList