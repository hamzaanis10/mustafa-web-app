// import { loadUser } from '@/store/reducers/loginSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

const AppInitializer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

return null
};

export default AppInitializer;
