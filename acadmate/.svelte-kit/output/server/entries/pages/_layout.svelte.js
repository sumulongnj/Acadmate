import { c as create_ssr_component, b as subscribe } from "../../chunks/index.js";
/* empty css                                                  */import { p as page } from "../../chunks/stores.js";
const css = {
  code: "main.svelte-wn4f2r.svelte-wn4f2r{height:100%}.topnav.svelte-wn4f2r.svelte-wn4f2r{height:50px;width:100%;background-color:#ac4949;overflow:hidden;position:fixed;z-index:1;box-shadow:0px 5px 10px lightgray}.topnav.svelte-wn4f2r a.svelte-wn4f2r{float:left;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $page.route.id;
  $$unsubscribe_page();
  return `<main class="${"svelte-wn4f2r"}"><div class="${"topnav svelte-wn4f2r"}">
		<a href="${"/"}" class="${"svelte-wn4f2r"}">Acadmate</a>
		<a href="${"/"}" style="${"float: right"}" class="${"svelte-wn4f2r"}">Settings</a>
		<a href="${"/"}" style="${"float: right"}" class="${"svelte-wn4f2r"}">Profile</a></div>
	${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
