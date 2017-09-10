import React, { PureComponent } from 'react'
import { Card, Alert } from 'reactstrap'
import Toggle from 'react-toggle'
import './Tables.css'

const tavoli =  [
    { nome : "Tavolo 1",
      invitati: ["Nonna Anita", "Nonno Emilio", "Zia Giovanna", "Maurizio", "Silvana", "Angela", "Claudio", "Marco", "Stefania"],
      img : "immagini/vinyl.png"
    },

    { nome : "Tavolo 2",
      invitati: ["Maria", "Giulia", "Andrea", "Antonio", "Anna", "Aurora", "Vito", "Aline", "Guillermo"],
      img : "immagini/quercia.jpg"
    },

    { nome : "Betulla",
      invitati: ["Virgilia", "Zia Emilia", "Zia Angiolina", "Maria Teresa", "Giuseppe", "Cinda", "Marinella", "Luigi"],
      img : "immagini/betulla.jpg"
    },
    { nome : "Baobab",
      invitati: ["Max", "Damiana", "Marco", "Mirko", "Carlandrea", "Fede", "Luca", "Cristina", "Tommaso", "Ricky"],
      img : "immagini/baobab.jpg"
    },

    { nome : "Faggio",
      invitati: ["Valeria", "Matteo", "Oliviero", "Cristina", "Valentina", "Marco", "Dario", "Nicole", "Chiara", "Marco DT"],
      img : "immagini/faggio.jpg"
    },

    { nome : "Pioppo",
      invitati: [ "Mauro D.", "Marco A.",  "Daniela", "Lele", "Gio", "Marco Gufo", "Matteo G.", "Marcello"],
      img : "immagini/pioppo.jpg"
    },

    { nome : "Ciliegio",
      invitati: ["Giusi", "Antonio", "Mario", "Virginia", "Gigi", "Sabina", "Giampiero", "Laura", "Elisio"],
      img : "immagini/ciliegio.jpg"
    },

    { nome : "Acero",
      invitati: ["Marco", "Sefy", "Patrizia", "Oscar", "Piera", "Maria Teresa", "Giancarlo", "Maura"],
      img : "immagini/acero.jpg"
    },

    { nome : "Salice",
      invitati: ["Simona", "Marco", "Miriam", "Davide", "Filippo", "Martina", "Giulia"],
      img : "immagini/salice.jpg"
    },

    { nome : "Edera",
      invitati: ["Monica", "Angelo", "Federica", "Andrea", "Stefania", "Lorenzo", "Gabriele"],
      img : "immagini/edera.jpg"

    },

    { nome : "Ulivo",
      invitati: ["Andrea", "Andrea", "Elia" , "Marta", "Adriana", "Sheila", "Luigi", "Clara", "Giusy", "Graziano"],
      img  : "immagini/ulivo.jpg"

    },

    { nome : "Fico",
      invitati: ["Luca", "Daniela", "Simone", "Elisa", "Enrico", "Fra", "Antonio", "Roberta", "Letizia", "Marc", "Philippe"],
      img : "immagini/fico.jpg"
    },

    { nome : "Alloro",
      invitati: ["Rachele", "Francesco", "Lorenzo", "Emiliano", "Enrico", "Mauro", "Camilla", "Cristina", "Elena"],
      img : "immagini/alloro.jpg"
    },

    { nome : "Mirto",
      invitati: ["Marianna", "Marco", "Emma", "Jacopo", "Andrea", "Melissa", "Vittoria", "Alex", "Chiara", "Davide"],
      img : "immagini/mirto.jpg"
    },
    {
      nome:"Eucalipto",
      invitati : ["Eleonora e Kalidou", "Sara", "Mauro", "Cristina", "Paola", "Dave", "Elisa", "Katia", "Clara e Rocco", "Valeria"],
      img : "immagini/eucalipto.jpg"
    },
    { nome : "Ciliegio",
      invitati: ["Giusi", "Antonio", "Mario", "Virginia", "Gigi", "Sabina", "Giampiero", ],
      img : "immagini/ciliegio.jpg"
    },
]

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
    invitati: ["Gilly", "Poli", "Cinda", "Gianni", "Piera", "Antonietta", "Zia Emilia", "Zia Angiolina", "Salvatore", "Lucia", ],
  },
  { nome : "Tavolo 8",
    invitati: ["Papa Silvia", "Neili", "Luca", "Tipa Luca", "Simone",],
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
    invitati: ["Erica", "Oscar", "Federico", "Sheila", "Peter", "Monica", "Danila", "Davide", "Dylan"],
  },
  { nome : "Tavolo 14",
    invitati: [ "Forla", "Nicola" , "Patty", "Ale", "Laura", "Skizzo", "Sara", "Elisa", "Stena", "Giovanni"],
  },
  { nome : "Tavolo 15",
    invitati: [ "Togni", "Tipa Togni", "Dema",  "Riky", "Tritto", "Denni", "Mauri", "Fede" ],
  },
  { nome : "Tavolo 16",
    invitati: [ "Giuse", "Paola", "Diego", "Silvia", "Willy", "Francy"],
  },
  { nome : "Tavolo 17",
    invitati: [ "Simona", "Gianluca", "Paolina", "Dani", "Luca", "Tipa Luca", "Katia", "bimba katia"],
  },

]

const serali = [
  { nome : "Solo Sera",
    invitati: ["Bonetti", "Jonny", "Gufo", "Polmo", "Costa", "Laura", ],
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
