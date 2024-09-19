import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useTheme} from "@/app/providers/ThemeProvider";
import {Header} from "@/widgets/Header";
import {Main} from "@/widgets/Main";


function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
          <Header />
          <Main />
    </div>
  )
}

export default App
