import { FilterInputProps } from '../model/type'
import classes from './FilterInput.module.css'

export const FilterInput = ({
  label,
  value,
  placeholder = '',
  onChange,
}: FilterInputProps) => {
  return (
    <aside>
      <div className={classes.filterInput}>
        <label>
          {label}
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
        </label>
      </div>
    </aside>
  )
}
