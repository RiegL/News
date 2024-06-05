"use client";

import { useState } from "react";
import sx from "./style.module.css";
import { useRouter } from "next/navigation";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()

  return (
    <>
      <nav className={sx.menu}>
        <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <div>Logo</div>
        <button onClick={() => router.push('/login')}>Login</button>
      </nav>

      {menuOpen && (
        <div className={sx.sidebar}>
          <div className={sx.fechar} onClick={() => setMenuOpen(!menuOpen)}>x</div>
          <ul>
            <li>Item 1 </li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
