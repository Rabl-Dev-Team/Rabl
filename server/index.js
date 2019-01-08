const r = require("rethinkdb")

const main = async () => {
	const db = await r.connect()
	console.log(db)
}

main()