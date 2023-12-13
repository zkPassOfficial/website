import cn from 'clsx'
import { colors } from 'config/variables'
import s from './features-matrix.module.scss'

export function FeaturesMatrix({ step }) {
  const getStyle = (i) => {
    const c = i <= step ? colors.green : colors.dot
    return {
      color: c,
    }
  }

  return (
    <div className={cn(s.featuresMatrix)} style={{ '--step': step }}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 5 */}
        <g style={getStyle(5)}>
          <path d="M52 4L4 52" stroke="currentColor" />
          <path d="M28 28L52 52" stroke="currentColor" />
          <circle cx="51.5788" cy="51.5789" r="4.05263" fill="currentColor" />
          <path d="M51.5791 4.42108L51.5791 52.3158" stroke="currentColor" />
          <path d="M4 52L52 52" stroke="currentColor" />
        </g>
        {/* 4 */}
        <g style={getStyle(4)}>
          <path d="M4.4209 4.42108L4.4209 52.3158" stroke="currentColor" />
          <path d="M28 28L4 52" stroke="currentColor" />
          <circle cx="4.42105" cy="51.5789" r="4.05263" fill="currentColor" />
        </g>
        {/* 3 */}
        <g style={getStyle(3)}>
          <path d="M4 4L52 4" stroke="currentColor" />
          <path d="M52 4L28 28" stroke="currentColor" />
          <circle cx="51.5788" cy="4.42105" r="4.05263" fill="currentColor" />
        </g>
        {/* 2 */}
        <g style={getStyle(2)}>
          <path d="M4 4L28 28" stroke="currentColor" />
          <circle cx="28.0002" cy="28" r="4.05263" fill="currentColor" />
        </g>
        {/* 1 */}
        <g style={getStyle(1)}>
          <circle cx="4.42105" cy="4.42105" r="4.42105" fill="currentColor" />
        </g>
      </svg>
    </div>
  )
}
