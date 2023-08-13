import type { IMeteoItem } from '@/shared/types'

const WeatherMeteoItem: React.FC<IMeteoItem> = ({ icon, title, body }) => {
  return (
    <li className="detail__item">
      <div className="detail__img">
        <img src={icon} alt="" />
      </div>
      <h3 className="detail__name">{ title }</h3>
      <h2 className="detail__info">
        { body }
      </h2>
    </li>
  )
}

export default WeatherMeteoItem