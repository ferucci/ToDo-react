import image from '../../assets/images/404-image.png'
import cls from './404.module.scss'

export const NotFoundItem = () => {
  return (
    <section className={cls.main}>

      <p className={cls.text}><span className={cls.accent}>404</span>  Error</p>

      <div className={cls.mainWrapp}>
        <img src={image} alt="Страницы не существует" />
      </div>

      <h3 className={cls.text}>Запрашиваемая вами страница <span className={cls.accent}>не найдена</span></h3>
      <a className={cls.link} href="/">Вернуться на главную</a>

    </section>
  )
}