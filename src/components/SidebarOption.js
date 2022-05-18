import '../Styles/sidebar_option.scss';

function SidebarOption({Icon, title, number, selected = false}) {
  return (
    <div className={`sidebar_option ${selected && 'sidebar-active'}`}>
        <Icon className='icon' />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption;