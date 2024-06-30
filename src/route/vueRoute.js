import { lazy, Suspense } from "react";
const VueThreePage = lazy(() => import("../pages/vuePackage/vue3Page/index"));
const VueBasePage = lazy(() => import("../pages/vuePackage/vueBasePage/index"));
const VueChapterPage = lazy(() =>
  import("../pages/vuePackage/vueChapterPage/index")
);
const VueTheoryPage = lazy(() =>
  import("../pages/vuePackage/vueTheoryPage/index")
);
const VuexPage = lazy(() => import("../pages/vuePackage/vuexPage/index"));
const vueRouter = [
  {
    path: "vueThreePage",
    element: (
      <Suspense fallback={"加载中～"}>
        <VueThreePage></VueThreePage>
      </Suspense>
    ),
  },
  {
    path: "vueBasePage",
    element: (
      <Suspense fallback={"加载中～"}>
        <VueBasePage></VueBasePage>
      </Suspense>
    ),
  },
  {
    path: "vueChapterPage",
    element: (
      <Suspense fallback={"加载中～"}>
        <VueChapterPage></VueChapterPage>
      </Suspense>
    ),
  },
  {
    path: "vueTheoryPage",
    element: (
      <Suspense fallback={"加载中～"}>
        <VueTheoryPage></VueTheoryPage>
      </Suspense>
    ),
  },
  {
    path: "vuexPage",
    element: (
      <Suspense fallback={"加载中～"}>
        <VuexPage></VuexPage>
      </Suspense>
    ),
  },
];

export default vueRouter;
