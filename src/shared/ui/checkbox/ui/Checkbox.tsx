import { CheckboxProps } from '../model/types'
import classes from './Checkbox.module.css'

export const Checkbox = ({ isAgree, setIsAgree }: CheckboxProps) => {
  return (
    <div className={classes.checkbox}>
      <input
        type="checkbox"
        name="confirm"
        id="ok"
        checked={isAgree}
        onChange={(e) => setIsAgree(e.target.checked)}
      />
      <label htmlFor="ok">Agree to the marketplace rules</label>
    </div>
  )
}
