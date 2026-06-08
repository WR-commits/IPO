import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>

        <div> 
<button className="btn btn-dark"><i className="fa fa-plus"></i> Novo Cliente</button>
<button className="btn btn-dark"><i className="fa-pencli"></i> Atualizar</button>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nome</th>
              <th scope="col">Morada</th>
              <th scope="col">Nif</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Luis</td>
              <td>Lisboa</td>
              <td>1234</td>
              <td><button className="btn btn-dark"><i className="fa fa-eye"></i></button></td>
              <td><button className="btn btn-dark"><i className="fa fa-pencil"></i></button></td> 
              <td><button className="btn btn-dark"><i className="fa fa-table"></i></button></td>                              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Dias</td>
              <td>porto</td>
              <td>1241</td>
              <td><button className="btn btn-dark"><i className="fa fa-eye"></i></button></td>
              <td><button className="btn btn-dark"><i className="fa fa-pencil"></i></button></td>  
              <td><button className="btn btn-dark"><i className="fa fa-table"></i></button></td>                               
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>larry</td>
              <td>braga</td>
              <td>21321</td>
              <td><button class="btn btn-dark"><i className="fa fa-eye"></i></button></td>
              <td><button className="btn btn-dark"><i className="fa fa-pencil"></i></button></td>  
              <td><button className="btn btn-dark"><i className="fa fa-table"></i></button></td>                               
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (<h2>Bem-vindo ao sistema IPO</h2>);
}

function ClientesList() {
  return (<h2>Página de Clientes</h2>);
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspecoesList() {
  return (<h2>Página de Inspecoes</h2>);
}


export default App