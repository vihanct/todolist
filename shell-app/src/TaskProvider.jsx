 import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [task, setTask] = useState([]);
 
  return (
    <ThemeContext.Provider value={{ task, setTask }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
