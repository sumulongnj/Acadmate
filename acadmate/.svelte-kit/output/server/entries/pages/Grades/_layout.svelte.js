import { c as create_ssr_component, b as subscribe } from "../../../chunks/index.js";
/* empty css                                                     */import { p as page } from "../../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sidenav.svelte-8ege.svelte-8ege{height:100%;width:200px;top:0;left:0;background-color:#ffffff;overflow-x:hidden;padding-top:60px;position:fixed;font-weight:600}.sidenav.svelte-8ege ul.svelte-8ege{list-style-type:none;margin:0;margin-left:25px;padding:0;width:150px}.sidenav.svelte-8ege li a.svelte-8ege{display:block;padding:8px 16px;text-decoration:none;margin-top:10px;margin-bottom:10px;border-radius:10px}.btn.svelte-8ege.svelte-8ege:hover{background-color:#ac4949;color:white}.active.svelte-8ege.svelte-8ege{background-color:#ac4949;color:white}.inactive.svelte-8ege.svelte-8ege{background-color:#ffffff;color:#898989}",
  map: null
};
const Layout_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $page.route.id;
  $$unsubscribe_page();
  return `<main><div class="${"sidenav svelte-8ege"}"><ul class="${"svelte-8ege"}"><li><a href="${"/"}" class="${"btn inactive svelte-8ege"}">Dashboard</a></li>
			<li><a href="${"/MyCurriculum"}" class="${"btn inactive svelte-8ege"}">My Curriculum</a></li>
			<li><a href="${"/Grades"}" class="${"btn active svelte-8ege"}">Grades</a></li>
			<li><a href="${"/GradeAlerts"}" class="${"btn inactive svelte-8ege"}">Grade Alerts</a></li>
			<li><a href="${"/Requirements"}" class="${"btn inactive svelte-8ege"}">Requirements</a></li></ul></div>
    
	${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout_1 as default
};
