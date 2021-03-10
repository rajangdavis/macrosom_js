import ManageMacros from '../hooks/manage_macros'
import MacroButton from '../components/macro_button'

export default function BoardsContainer(midiObject){
	
  const returnNewBoard = (state)=>{
    return {
      id: Date.now(),
      name: `Board ${state.length + 1}`,
      macros: []
    }
  }

  const [state, dispatch] = ManageMacros(returnNewBoard);

  return <div className='macros-container'>
    <h1>Boards</h1>
    {state.map(item =>(
      <div key={item.id}>{MacroButton({midiObject: midiObject, buttonData: item, dispatch: dispatch})}</div>
    ))}
    <div onClick={() => dispatch({type: 'add'})}>
      Add Macro
    </div>
  </div>
}