export default function MenuCard(props) {
  const menuinfo = props.menuinfo;
  return (
    <div>
      <div>{menuinfo.menus}</div>
      {/*
        메뉴 이름
        메뉴 가격
        메뉴 설명
        메뉴 사진
         */}
    </div>
  );
}
