import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { ARTICLES, SOURCE_REPOSITORY } from '../data/articles.mjs';

export function Brand({ footer = false }) {
  return <a className={'brand' + (footer ? ' footer-brand' : '')} href="/" aria-label="Jasmine｜Embodied Intelligence Learning Station 首页">
    <span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 64 64" width="36" height="36"><path d="M24 16h22v25c0 10-6 15-15 15-7 0-12-3-15-9l8-5c1 3 3 5 7 5 4 0 6-2 6-7V25H24Z" fill="#fff8ec" /></svg></span>
    <span className="brand-copy"><span className="title-3">Jasmine<span className="brand-period">.</span></span><span className="caption-5">Embodied Intelligence<span className="brand-subtitle-break"> Learning Station</span></span></span>
  </a>;
}

export function Header({ home = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('curriculum');
  const dialog = useRef(null);
  const menuButton = useRef(null);
  const links = [{ id: 'curriculum', label: '学习清单' }, { id: 'roadmap', label: '学习路径' }, { id: 'method', label: '面试准备' }];

  useEffect(() => {
    if (!home) return undefined;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -55% 0px' });
    for (const link of links) {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return undefined;
    if (menuOpen && !element.open) element.showModal();
    if (!menuOpen && element.open) element.close();
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  function closeMenu() { setMenuOpen(false); }
  return (
    <>
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="主导航">
          {links.map(link => <a key={link.id} className="title-4" href={'/#' + link.id} aria-current={home && active === link.id ? 'location' : undefined}>{link.label}</a>)}
        </nav>
        <a className="header-github button-sm" href={SOURCE_REPOSITORY} target="_blank" rel="noreferrer"><GithubLogoIcon size={18} /> <span>清单来源</span><ArrowUpRightIcon size={14} /></a>
        <button ref={menuButton} className={'menu-toggle' + (menuOpen ? ' is-open' : '')} type="button" aria-label="打开导航菜单" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><span /><span /></button>
      </header>
      <dialog ref={dialog} id="mobile-navigation" className="mobile-panel" onClose={() => { setMenuOpen(false); menuButton.current?.focus(); }}>
        <div className="mobile-panel-top"><Brand /><button className="menu-toggle is-open" type="button" aria-label="关闭导航菜单" onClick={closeMenu}><span /><span /></button></div>
        <p className="caption-3 mobile-menu-label">保持好奇，开始探索。</p>
        <nav aria-label="手机导航">
          {links.map((link, index) => <a className="heading-4" style={{ '--link-delay': Math.min(index * 60, 400) + 'ms' }} key={link.id} href={'/#' + link.id} onClick={closeMenu}>{link.label}<ArrowUpRightIcon size={28} /></a>)}
          <a className="heading-4" style={{ '--link-delay': '180ms' }} href="/?saved=1#curriculum" onClick={closeMenu}>我的收藏<ArrowUpRightIcon size={28} /></a>
        </nav>
        <p className="caption-2">从阅读开始，走向真实世界。</p>
      </dialog>
    </>
  );
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><Brand footer /><p className="body-6">把好奇心，变成可以开始的学习。</p></div>
      <div className="footer-links"><a className="title-4" href="/#curriculum">全部 {ARTICLES.length} 篇</a><a className="title-4" href="/#faq">常见问题</a><a className="title-4" href="mailto:jasminelai@foxmail.com">联系 Jasmine <ArrowUpRightIcon size={14} /></a></div>
    </div>
    <div className="container footer-bottom caption-5"><span>© 2026 Jasmine · Embodied Intelligence Learning Station<br />仅供个人学习使用</span><span>原始内容版权归原作者所有</span><div><a href="/privacy/">隐私说明</a><a href="/terms/">使用与来源</a></div></div>
  </footer>;
}

export function Reveal({ children, className = '', as: Tag = 'div', ...props }) {
  const element = useRef(null);
  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const bounds = node.getBoundingClientRect();
    if (bounds.top <= window.innerHeight) return undefined;
    node.classList.add('will-reveal');
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        node.classList.remove('will-reveal');
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={element} className={'reveal ' + className} {...props}>{children}</Tag>;
}

export function SectionLabel({ number, children }) {
  return <p className="section-label caption-3"><span>{number}</span>{children}</p>;
}

export function StartLink({ children = '开始学习', className = '', ...props }) {
  return <a className={'button button-primary button-md ' + className} href="/#curriculum" {...props}>{children}<ArrowRightIcon size={20} aria-hidden="true" /></a>;
}
