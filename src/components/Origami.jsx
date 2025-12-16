import { useTranslation } from 'react-i18next'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import boat from '../assets/boat.jpg'

const Origami = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='container my-4'>
        <header>
          <h1>{t('OrigamiName')}</h1>
          <p className='mt-4 mb-0'>{t('subtitle')}</p>
          <nav aria-label='Page navigation' className='mb-4 mt-2 d-flex flex-column'>
            <a href='#materials'>{t('nav.materials')}</a>
            <a href='#steps'>{t('nav.steps')}</a>
            <a href='#tips'>{t('nav.tips')}</a>
          </nav>
        </header>
        <Image src={boat} fluid width={500} />
        <div className='  d-flex justify-content-center  flex-column'>
          <h2 id='materials'>{t('materialsTitle')}</h2>
          <ListGroup>
            <ListGroup.Item>{t('materials.paper')}</ListGroup.Item>
            <ListGroup.Item>{t('materials.surface')}</ListGroup.Item>
            <ListGroup.Item>{t('materials.enthusiasm')}</ListGroup.Item>
          </ListGroup>

          <h2 id='steps'>{t('stepsTitle')}</h2>
          <ListGroup as='ol' numbered className='w-50'>
            <ListGroup.Item as='li'>{t('steps.1')}</ListGroup.Item>
            <ListGroup.Item as='li'>{t('steps.2')}</ListGroup.Item>
            <ListGroup.Item as='li'>{t('steps.3')}</ListGroup.Item>
            <ListGroup.Item as='li'>{t('steps.4')}</ListGroup.Item>
            <ListGroup.Item as='li'>{t('steps.5')}</ListGroup.Item>
            <ListGroup.Item as='li'>{t('steps.6')}</ListGroup.Item>
          </ListGroup>
          <h2 id='tips'>{t('tipsTitle')}</h2>
          <ListGroup className='w-50'>
            <ListGroup.Item>{t('tips.1')}</ListGroup.Item>
            <ListGroup.Item>{t('tips.2')}</ListGroup.Item>
            <ListGroup.Item>{t('tips.3')}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default Origami
