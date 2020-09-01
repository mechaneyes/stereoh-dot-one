import React, {useState} from 'react';

import MonstersAPI from '../../services/MonstersAPI';

import PromoterForm from '../../components/organisms/PromoterForm/PromoterForm';

const PromoterNew = ({setRedirect, setModal}) => {

  const [monster, setMonster] = useState({});

  const callApi = () => {
    return MonstersAPI.create(monster);
  }

  const redirectTo = monster =>
    `/monsters/${monster.id}`
  
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-4">New Monster</h1>
      </div>
      <div className="row">
        <PromoterForm
          monster={monster}
          setMonster={setMonster}
          callApi={callApi}
          buttonText='Create Monster'
          redirectNotice='Monster was successfuly created'
          redirectTo={redirectTo}
          setRedirect={setRedirect}
        //   setModal={setModal}
          cancelPath='/'
        />
      </div>
    </div>
  );
}

export default PromoterNew;
