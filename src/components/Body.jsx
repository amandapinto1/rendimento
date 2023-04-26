import React from 'react'

const Body = ({ data }) => {
    return (
        <div className='main'>
            {data && data.map((item) =>
                <div className="container" key={item.serie + item.tipoTurma}>
                    <div style={{ display: 'flex' }}>
                        <div className="flex-column">
                            <span className="title">{item.serie}</span>
                            <span className="sub-title">{item.tipoTurma}</span>
                        </div>
                    </div>
                    <div className="flex-column" style={{ marginTop: '2em' }}>
                        <span className="sub-title" style={{ color: '#BBBBBB', fontSize: '.8em', textAlign: 'left' }}>quantidade de alunos
                            com baixo desempenho por
                            disciplina</span>
                        <div>
                            <div>
                                <table>
                                    <thead className="table-header">
                                        <tr>
                                            <th rowSpan="2" style={{ textAlign: 'left', paddingLeft: '1em' }}>DISCIPLINA</th>
                                            <th colSpan="2">1BIM</th>
                                            <th colSpan="2">2BIM</th>
                                            <th colSpan="2">3BIM</th>
                                            <th colSpan="2">4BIM</th>
                                        </tr>
                                        <tr>
                                            <th>VP</th>
                                            <th>VG</th>
                                            <th>VP</th>
                                            <th>VG</th>
                                            <th>VP</th>
                                            <th>VG</th>
                                            <th>VP</th>
                                            <th>VG</th>
                                        </tr>
                                    </thead>
                                    {item.disciplinas.map((disciplina) =>
                                        <tbody key={item.serie+disciplina.nome}>
                                            <tr>
                                                <td className="disciplina">{disciplina.nome}</td>
                                                <td>{disciplina.vP1 == 0 ? '' : disciplina.vP1}</td>
                                                <td>{disciplina.vG1 == 0 ? '' : disciplina.vG1}</td>
                                                <td>{disciplina.vP2 == 0 ? '' : disciplina.vP2}</td>
                                                <td>{disciplina.vG2 == 0 ? '' : disciplina.vG2}</td>
                                                <td>{disciplina.vP3 == 0 ? '' : disciplina.vP3}</td>
                                                <td>{disciplina.vG3 == 0 ? '' : disciplina.vG3}</td>
                                                <td>{disciplina.vP4 == 0 ? '' : disciplina.vP4}</td>
                                                <td>{disciplina.vG4 == 0 ? '' : disciplina.vG4}</td>
                                            </tr>
                                        </tbody>)}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Body