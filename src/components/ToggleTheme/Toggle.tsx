import cls from './Toggle.module.scss'

export const Toggle = ({ value, onChange }: any) => {
  return <label className={cls.switch} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className={cls.slider} />
    <span className={cls.wave} />
  </label>
}