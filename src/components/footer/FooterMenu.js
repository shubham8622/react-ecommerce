const FooterMenu = ({menuData}) => {
  return (
    <>
        <div className="footerMenuCmp">
            <div className="f-menu">
                <h5>{menuData.title}</h5>
            </div>
            <ul>
                {
                    menuData.menus.map((data,index)=>{
                        return(
                            <li key={index}>
                                <a href="http://">{data}</a>
                            </li>
                    )
                    })
                }
            </ul>
        </div>
    </>
  );
};

export default FooterMenu;
