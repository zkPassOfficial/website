import cn from 'clsx'
import { colors } from 'config/variables'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import s from './progress-matrix.module.scss'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export function ProgressMatrix({ step = 0, className }) {
  const stepRefs = useRef([])
  const prev = usePrevious(step)

  useEffect(() => {
    if (!step) return
    const tl = gsap.timeline()

    let prevStep = prev || 1

    // Forwards
    if (step > prevStep) {
      for (let i = 1; i < step + 1; i++) {
        if (i > 9) {
          tl.to(stepRefs.current[9], { opacity: 1, duration: 0.3 })
        } else if (i <= prevStep) {
          tl.to(
            stepRefs.current[i - 1],
            { color: colors.green, duration: 0 },
            '0',
          )
        } else {
          tl.to(
            stepRefs.current[i - 1],
            {
              color: colors.green,
              duration: 0.3,
            },
            '0',
          )
        }
      }
    }
    // Backwards
    else {
      for (let i = prevStep; i > 0; i--) {
        if (i > 9) {
          tl.to(stepRefs.current[9], { opacity: 0, duration: 0.3 })
        } else if (i <= step) {
          tl.to(
            stepRefs.current[i - 1],
            { color: colors.green, duration: 0 },
            '0',
          )
        } else {
          tl.from(
            stepRefs.current[i - 1],
            {
              color: colors.green,
              duration: 0.3,
            },
            '0',
          )
        }
      }
    }

    tl.play()

    return () => tl?.revert()
  }, [step])

  return (
    <div className={cn(s.progressMatrix, className)}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1-3 */}
        <g ref={(node) => (stepRefs.current[0] = node)}>
          <circle
            cx="4.4210501"
            cy="4.4210501"
            r="4.4210501"
            fill="currentColor"
          />
        </g>
        <g ref={(node) => (stepRefs.current[1] = node)}>
          <path d="M 4.42102,4.42114 V 27.935838" stroke="currentColor" />
          <circle
            cx="4.4210501"
            cy="27.999901"
            r="4.4210501"
            fill="currentColor"
          />
        </g>
        <g ref={(node) => (stepRefs.current[2] = node)}>
          <path d="M 4.4230306,27.913187 V 51.427885" stroke="currentColor" />
          <circle
            cx="4.4210501"
            cy="51.578999"
            r="4.4210501"
            fill="currentColor"
          />
        </g>

        {/* 4-6 */}
        <g ref={(node) => (stepRefs.current[3] = node)}>
          <circle cx="28" cy="4.4210501" r="4.4210501" fill="currentColor" />
        </g>
        <g ref={(node) => (stepRefs.current[4] = node)}>
          <path d="M 28.002686,4.4768066 V 27.991505" stroke="currentColor" />
          <circle cx="28" cy="27.999901" r="4.4210501" fill="currentColor" />
        </g>
        <g ref={(node) => (stepRefs.current[5] = node)}>
          <path d="M 28.004697,27.968854 V 51.483552" stroke="currentColor" />
          <circle cx="28" cy="51.578999" r="4.4210501" fill="currentColor" />
        </g>

        {/* 7-9 */}
        <g ref={(node) => (stepRefs.current[6] = node)}>
          <circle
            cx="51.578899"
            cy="4.4210501"
            r="4.4210501"
            fill="currentColor"
          />
        </g>
        <g ref={(node) => (stepRefs.current[7] = node)}>
          <path d="M 51.574919,4.9259489 V 28.440647" stroke="currentColor" />
          <circle
            cx="51.578899"
            cy="27.999901"
            r="4.4210501"
            fill="currentColor"
          />
        </g>
        <g ref={(node) => (stepRefs.current[8] = node)}>
          <path d="M 51.57693,28.417996 V 51.932694" stroke="currentColor" />
          <circle
            cx="51.578899"
            cy="51.578999"
            r="4.4210501"
            fill="currentColor"
          />
        </g>

        {/* 10+ */}
        <g ref={(node) => (stepRefs.current[9] = node)} className={s.extra}>
          <path d="M4 4L52 4" stroke="currentColor" />
          <path d="M4 28L52 28" stroke="currentColor" />
          <path d="M4 52H52" stroke="currentColor" />
        </g>
      </svg>
    </div>
  )
}
