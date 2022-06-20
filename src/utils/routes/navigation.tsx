import { HomePage, AboutPage } from "@pages";

export const routes: Array<{
  path: string;
  component: React.ReactNode;
}> = [
  { path: "/", component: <HomePage /> },
  { path: "/about", component:<AboutPage />  },
];
