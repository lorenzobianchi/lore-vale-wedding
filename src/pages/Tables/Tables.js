import React, { PureComponent } from 'react'
import { Card, Alert } from 'reactstrap'
import Toggle from 'react-toggle'
import './Tables.css'


const tavolilore = [
  { nome : "Tavolo 1",
    invitati: ["Mauro", "Silvia", "Dario", "Nicole", "Francesco", "Rachele", "Barbara", "Sabri", "Guido"],
  },
  { nome : "Tavolo 2",
    invitati: ["Monica", "Angelo", "Federica", "Andrea", "Stefania", "Lorenzo", "Gabriele"],
  },
  { nome : "Tavolo 3",
    invitati: ["Luigi", "Adriana", "Andrea", "Elia", "Clara", "Andrea Jr."],
  },
  { nome : "Tavolo 4",
    invitati: ["Patrizia", "Oscar", "Piera", "Maria Teresa", "Giancarlo", "Davide", "Simona"],
  },
  { nome : "Tavolo 5",
    invitati: ["Marco", "Sefy", "Miriam" , "Maura", "Giampiero", "Silvana","Laura" , "Mondo", ],
  },
  { nome : "Tavolo 6",
    invitati: ["Giusi", "Antonio", "Mario", "Virginia", "Gigi", "Sabina", "Martina", "Filippo", "Giulia","Giacomo", "Erika"],
  },
  { nome : "Tavolo 7",
    invitati: ["Gilly", "Poli", "Cinda", "Gianni", "Piera", "Zia Emilia", "Zia Angiolina", "Salvatore", "Lucia", ],
  },
  { nome : "Tavolo 8",
    invitati: ["Papa Silvia", "Neili", "Luca", "Simone",],
  },
]

const tavolivale = [
  { nome : "Tavolo 9",
    invitati: ["Nonno Milio", "Nonna Anita", "Zia Giovanna", "Zia Elvira", "Zio Bruno", "Simona", "Gianpaolo", "Elisa", "Maurizio"],
  },
  { nome : "Tavolo 10",
    invitati: ["Zia Nora", "Zio Mauro", "Marco", "Zio Gino", "Zia Nora", "Zia Anna", "Silvana"],
  },
  { nome : "Tavolo 11",
    invitati: ["Carmen", "Ginetto", "Luisa", "Antonello", "Giuliana", "Piero", "Manu", "Davide", "Silvia", "Tipa Silvia"],
  },
  { nome : "Tavolo 12",
    invitati: ["Mirella", "Roberto", "Renato", "Katia", "Arianna", "Marta", "Gianbattista", "Anita", "Angelica"],
  },
]

const tavoliamici = [
  { nome : "Tavolo 13",
    invitati: ["Erica", "Oscar", "Federico", "Sheila", "Peter", "Monica", "Danila", "Davide", "Dylan",  "Diego", "Silvia"],
  },
  { nome : "Tavolo 14",
    invitati: [ "Forla", "Nicola" , "Patty", "Ale", "Laura", "Skizzo", "Sara", "Giovanni", "Giuse", "Paola", "Willy", "Francy"],
  },
  { nome : "Tavolo 15",
    invitati: [ "Togni", "Dema",  "Riky", "Tritto", "Denni", "Mauri", "Fede" ],
  },
  // { nome : "Tavolo 16",
  //   invitati: [ "Giuse", "Paola", "Willy", "Francy", "Diego", "Silvia"],
  // },
  { nome : "Tavolo 16",
    invitati: [ "Simona", "Gianluca", "Paolina", "Dani", "Luca", "Tipa Luca", "Katia", "Lucrezia"],
  },

]

const serali = [
  { nome : "Solo Sera",
    invitati: ["Bonetti", "Jonny", "Gufo", "Polmo", "Costa", "Laura", "Gatti", "Cata" ],
  },
]



class TablesList extends PureComponent {
  state = {
    check: false
  }

  toggleCheck = () => {
    this.setState({
      check: !this.state.check
    })
  }

  render() {
  const { list=[] } = this.props
    return (
      <div>
        {list.map(t => (
          <Card key={t.i} className={`TablesList_item ${(t.invitati.length > 11) ? `TablesList_item_ckeck` : null}`}>
            <h3>
              {t.nome} <span className="TablesList_num_label">
                NUM: {(t.invitati.length > 7 && t.invitati.length < 11) ? <span style={{color: '#1ba34c'}}>{t.invitati.length}</span> : <span style={{color: '#fa0c28'}}>{t.invitati.length}</span>}
              </span>
            </h3>
            <ul>{t.invitati.map(p => (
              <li key={p.i}>{p}</li>
            ))}</ul>
            {/* <div className="Toggle_container">
              <Toggle
                defaultChecked={this.state.check}
                aria-labelledby='check-label'
                onChange={this.toggleCheck}
                style={{marginLeft: 'auto'}}
              />
            </div> */}
          </Card>
        ))}
        <hr />
      </div>
    )
  }
}

const Tables =  () => (
  <div className="Tables">
    <span style={{fontSize: 20,color: 'grey', textDecoration: 'underline'}}>
      TOTALE TAVOLI: <b style={{color: '#222'}}>{(tavolilore.length) + (tavolivale.length) + (tavoliamici.length)}</b>
    </span>
    <p>Tavoli da <b>8, 9, 10</b> coperti <br /><b>4</b> tavoli da 12</p>
    <h2>Parenti Lore</h2>
    <TablesList list={tavolilore} />
    <h2>Parenti Vale</h2>
    <TablesList list={tavolivale} />
    <h2>Amici</h2>
    <TablesList list={tavoliamici} />
  </div>
)

export default Tables
