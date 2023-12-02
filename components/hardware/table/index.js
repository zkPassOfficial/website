import cn from 'clsx'
import { RichText } from 'libs/tina/richtext'
import { Background } from 'libs/webgl/components/background'
import { useState } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { BarLevel } from '../../bar-level'
import s from './hardware-table.module.scss'

export function HardwareTable({ table }) {
  const [activeColumn, setActiveColumn] = useState(null)
  const [activeRow, setActiveRow] = useState(null)

  const handleMouseEnter = (ci, ri) => {
    ci !== activeColumn && setActiveColumn(ci)
    ri !== activeRow && setActiveRow(ri)
  }
  const handleMouseLeave = () => {
    setActiveColumn(null)
    setActiveRow(null)
  }

  return (
    <div
      className={cn(s.hardwareTable)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className={cn(s.row, s.header)}>
        <span className={cn(s.title, 'p')}>zk</span>
        <span className="p">Block</span>
        <span className="p">Setup Time</span>
        <span className="p">Prove Time</span>
        <span className="p">Verify Time</span>
        <span className="p">Memory</span>
        <span className="p">Gates</span>
        <Background className={s.bg} />
      </div>
      <div className={cn(s.spacer, 'desktop-only')} />
      {table.map((row, rowIndex) => (
        <div className={s.row} key={rowIndex}>
          {Object.keys(row)
            .filter((r) => !r.startsWith('_'))
            .map((cell, columnIndex) => (
              <div
                className={cn(
                  columnIndex === 0 && s.title,
                  activeColumn === columnIndex && s.active,
                )}
                onMouseEnter={() => handleMouseEnter(columnIndex, rowIndex)}
                data-tina-field={tinaField(row, cell)}
                key={columnIndex}
              >
                <RichText content={row[cell]} />
              </div>
            ))}
          <Background className={s.bg} />
        </div>
      ))}

      <div className={cn(s.headerEnd, 'desktop-only')}>
        <Background className={s.bg} />
      </div>
      <div className={cn(s.rowEnd, 'desktop-only')}>
        <BarLevel
          className={s.barLevel}
          fillLow={
            activeRow === null
              ? 0
              : (table.length - 1 - activeRow) / table.length
          }
          fillHigh={
            activeRow === null
              ? 1
              : (table.length - 1 - (activeRow - 1)) / table.length
          }
        />

        <Background className={s.bg} />
      </div>
    </div>
  )
}
