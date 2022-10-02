import React from 'react';

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  /**nextJs에서는 이렇게 라우팅함. a태그는 작성안해줘도 되지만 css를 넣거나할때 사용하면 좋음 */
  // styled jsx 는 nextJS에서만 사용할 수 있고, 독립적이여서 같은 클래스명이나 태그로 css를 적용해도 다른 컴포넌트에서는 적용되지 않는다.
  return (
    <nav>
      <div className="order">
        <Link href="/order">
          <div className={router.pathname === "/order" ? "active btn" : "btn"}>
            <a>주문목록</a>
          </div>
        </Link>
      </div>
      <div className="menu">
        <Link href="/menu">
          <div className={router.pathname === "/menu" ? "active btn" : "btn"}>
            <a>메뉴관리</a>
          </div>
        </Link>
      </div>
    </nav>
  );
}
