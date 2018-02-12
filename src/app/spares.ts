export class Spares {
  static SPARES_FOR_VB5 =[
      {
        id: '100-24508',
        name: 'LIMIT SWITCH 2NO+1NC'
      },
      {
        id: '100-63534',
        name: 'CHAIN ASSEMBLY'
      },
      {
        id: '100-63538',
        name: 'DAMPER ASSEMBLY'
      },
      {
        id: '100-63594',
        name: 'CLOSING COIL WITH BRACKET'
      },
      {
        id: '100-63595',
        name: 'TRIPPING COIL WITH BRACKET'
      },
      {
      id: '100-63626',
      name: 'DETENT CATCH'
      },
    {
      id: '100-63636',
      name: 'TRIPPING CATCH ASSEMBLY'
    },
    {
      id: '100-63637',
      name: 'GEAR WHEEL ASSEMBLY'
    },
    {
      id: '100-63638',
      name: 'MOTOR LIMIT SWITCH LEVER'
    },
    {
      id: '100-63639',
      name: 'CLOSING LEVER'
    },
    {
      id: '100-63640',
      name: 'CLUTCH SOCKET ASSEMBLY'
    },
    {
      id: '100-63641',
      name: 'CRANK SHAFT ASSEMBLY'
    },
    {
      id: '100-63651',
      name: 'CHARGING SHAFT ASSEMBLY'
    },
    {
      id: '100-63672',
      name: 'BEARING BLOCK ASSEMBLY'
    },
    {
      id: '100-63729 + 201-63556',
      name: 'SPRING CHARGING MOTOR WITH RAG WHEEL'
    },
    {
      id: '100-63820',
      name: 'STUD, RODEND FOR CONNECTING ROD'
    },
    {
      id: '100-63821',
      name: 'STUD, ROD END FOR DAMPER'
    },
    {
      id: '100-63857',
      name: 'TRACK ROLLER (NATV6)'
    },
    {
      id: '100-63860',
      name: 'LIMIT SWITCH ASSEMBLY'
    },
    {
      id: '100-63897',
      name: 'TRIP LEVER ASSEMBLY'
    },
    {
      id: '100-63899',
      name: 'TRIP CLOSE KNOB ASSEMBLY'
    },
    {
      id: '100-64144',
      name: 'FLEXIBLE CONDUCTOR'
    },
    {
      id: '100-64581',
      name: 'FLEXIBLE CONDUCTOR,31.5KA'
    },
    {
      id: '100-64209',
      name: 'TRIPPING COIL'
    },
    {
      id: '100-64210',
      name: 'CLOSING COIL'
    },
    {
      id: '100-93901',
      name: 'RATCHET HANDLE WITH BIT'
    },
    {
      id: '201-63554',
      name: 'DOUBLE TEETH RAGWHEEL'
    },
    {
      id: '201-63556',
      name: 'SINGLE TEETH RAGWHEEL'
    },
    {
      id: '201-63569',
      name: 'MAIN LEVER SPRING'
    },{
      id: '201-63571',
      name: 'SPRING FOR DETENT CATCH'
    },
    {
      id: '201-63633',
      name: 'OPENING SPRING'
    },
    {
      id: '201-63668',
      name: 'TRIP LEVER SPRING'
    },
    {
      id: '201-63743',
      name: 'STOP'
    },
    {
      id: '202-63955',
      name: 'SHIM'
    },
    {
      id: '206-63656',
      name: 'TRIP CLOSE KNOB FOR VR5 & VB5'
    },
    {
      id: '100-64192',
      name: 'WITHDRAWL HANDLE'
    },{
      id: '100-64184',
      name: 'VACUUM INTERRUPTER, B-14'
    },{
      id: '100-64253',
      name: 'VACUUM INTERRUPTER, C-14, 31.5KA, 2000A'
    },
    {
      id: '100-63557',
      name: 'PRESSURE SPRING ASSEMBLY'
    },
    {
      id: '100-63666',
      name: 'LOCKING LEVER ASSEMBLY'
    },
    {
      id: '100-63670',
      name: 'STRIKING GEAR ASSEMBLY'
    },
    {
      id: '100-63789 & 100-64203',
      name: 'SIMPLEX CHAIN & CLEVIS'
    },{
      id: '100-63804',
      name: 'TRACK ROLLER'
    },{
      id: '100-63856',
      name: 'TRACK ROLLER STUD TYPE'
    },
    {
      id: '100-63888',
      name: 'DRIVE SHAFT ASSEMBLY, 25KA'
    },{
      id: '201-63505',
      name: 'CAM LEVER'
    },
    {
      id: '201-63506',
      name: 'CAM LEVER'
    },
    {
      id: '201-63520',
      name: 'TRUNION'
    },
    {
      id: '201-63528',
      name: 'STIRRUP SHAFT'
    },
    {
      id: '201-63527',
      name: 'AXLE FOR PRESSURE SPRING'
    },
    {
      id: '201-63608',
      name: 'TRUNION'
    },
    {
      id: '201-63634',
      name: 'TRIPPING COIL BRACKET'
    },{
      id: '201-64296',
      name: 'MOTOR FIXING PLATE'
    },
    {
      id: '202-64366',
      name: 'SHIM, 31.5KA'
    },{
      id: '204-63596, 100-64148',
      name: 'ALUMINIUM BUSHING WITH PG BUSH'
    },{
      id: '204-63597',
      name: 'INDICATOR'
    },{
      id: '204-64559 & 100-64151',
      name: 'BUSHING WITH BEARING'
    },
    {
      id: '206-63693 & 206-63706',
      name: 'RED INDICATOR WITH STICKER'
    },
    {
      id: 'AUXILLARY SWITCHES',
      name: '(SPECIFY NO. OF WAYS)'
    },
    {
      id: 'CASTEL INTER LOCK',
      name: '(SPECIFY TYPE)'
    },
    {
      id: '201-63572',
      name: 'COMPRESSION SPRING'
    }
    ];
  static ALL_SPARES = [
    'SPARES_FOR_VB5',
    'SPARES_FOR_MCVCB',
    'SPARES_FOR_PCVCB',
    'SPARES_FOR_VCB',
    'SPARES_FOR_RMU',
    'SPARES_FOR_SF6'
  ];
  static getSpares(name: string) {
    switch (name) {
      case 'SPARES_FOR_VB5' :
        return Spares.SPARES_FOR_VB5;
    }
  }
}
