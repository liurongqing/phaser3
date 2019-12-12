const colors = require('colors')
const fs = require('fs')
const path = require('path')
const os = require('os')
const tsdoc = require('@microsoft/tsdoc')
const { TSDocParser, ParserContext, DocComment } = tsdoc
const { Formatter } = require('./format')
// console.log(typeof Formatter.renderDocNode)
// return
// console.log(os)
function main() {
  console.log(colors.yellow('*** TSDoc API demo: Simple Scenario ***') + os.EOL)

  const inputFilename = path.resolve(
    path.join(__dirname, '.', 'src', 'test.ts')
  )

  console.log('Reading src/test.ts...')

  const inputBuffer = fs.readFileSync(inputFilename).toString()
  const tsdocParser = new TSDocParser()
  const parserContext = tsdocParser.parseString(inputBuffer)

  console.log(os.EOL + colors.green('Input Buffer:') + os.EOL)
  console.log(colors.gray('<<<<<<'))
  console.log(inputBuffer)
  console.log(colors.gray('>>>>>>'))

  console.log(os.EOL + colors.green('Extracted Lines:') + os.EOL)
  console.log(
    JSON.stringify(parserContext.lines.map(x => x.toString()), undefined, '  ')
  )
  console.log(os.EOL + colors.green('Parser Log Messages:') + os.EOL)

  if (parserContext.log.messages.length === 0) {
    console.log('No errors or warnings.')
  } else {
    for (const message of parserContext.log.messages) {
      console.log(inputFilename + message.toString())
    }
  }

  console.log(os.EOL + colors.green('DocComment parts:') + os.EOL)
  const docComment = parserContext.docComment

  console.log(
    colors.cyan('Summary: ') +
      JSON.stringify(Formatter.renderDocNode(docComment.summarySection))
  )

  if (docComment.remarksBlock) {
    console.log(
      colors.cyan('Remarks: ') +
        JSON.stringify(Formatter.renderDocNode(docComment.remarksBlock.content))
    )
  }

  for (const paramBlock of docComment.params.blocks) {
    console.log(
      colors.cyan(`Parameter "${paramBlock.parameterName}": `) +
        JSON.stringify(Formatter.renderDocNode(paramBlock.content))
    )
  }

  if (docComment.returnsBlock) {
    console.log(
      colors.cyan('Returns: ') +
        JSON.stringify(Formatter.renderDocNode(docComment.returnsBlock.content))
    )
  }

  console.log(
    colors.cyan('Modifiers: ') +
      docComment.modifierTagSet.nodes.map(x => x.tagName).join(', ')
  )
}

main()
