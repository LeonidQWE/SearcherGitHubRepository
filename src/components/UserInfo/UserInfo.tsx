import { FaLocationDot } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import { LocalGithubUser } from 'types';
import { InfoItem, InfoItemProps } from 'components/InfoItem';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<
  LocalGithubUser,
  'location' | 'twitter' | 'blog' | 'company'
> {}

export const UserInfo = ({location, twitter, blog, company}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <FaLocationDot/>,
      text: location,
    },
    {
      icon: <FaTwitter/>,
      text: twitter,
    },
    {
      icon: <FaBlog/>,
      text: blog,
      isLink: true
    },
    {
      icon: <PiBuildingApartmentFill/>,
      text: company
    },
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => <InfoItem key={index} {...item}/>)}
    </div>
  )
}
