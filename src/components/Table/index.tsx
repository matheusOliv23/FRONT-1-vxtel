import styles from './styles.module.scss'

export interface TableProps {
  dataBody: string[]
}

export const Table = ({ dataBody }: TableProps) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Tempo</th>
            <th>Plano FaleMais</th>
            <th>
              Com <br />
              FaleMais
            </th>
            <th>
              Sem <br />
              FaleMais
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {dataBody.map((data) => (
              <td key={data}>{data}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
