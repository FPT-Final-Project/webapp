import Navbar from './Navbar';
import MainServices from './MainServices';
import MainConnect from './MainConnect';
import MainQuiz from './MainQuiz';
import MainTeam from './MainTeam';
import MainChart from './MainChart';
import MainCustomer from './MainCustomer';
import Footer from './Footer';
import Banner from './Banner';
import './Sass/index.scss';

const Home = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      {/* <motion.div className="total" initial={{opacity: 0}}
      animate={{ opacity: 1}} transition={{ duration: 1 }}> */}
      <div className="total">
        <div id="home" className="header">
          <div className="grid">
            <Navbar />
            <Banner />
          </div>
        </div>
        {/* Main */}
        {/* =======Services */}
        <MainServices />
        {/* =======Connect============== */}
        <MainConnect />
        {/* =======QuizTest */}
        <MainQuiz />
        {/* =======Team */}
        <MainTeam />
        {/* ==========Chart======= */}
        <MainChart />
        {/* =======Customer */}
        <MainCustomer />
        {/* FOoter */}
        <Footer />
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
