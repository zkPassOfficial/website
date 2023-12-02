const fs = require('fs')
const path = require('path')
const _kebabCase = require('lodash/kebabCase')
const _camelCase = require('lodash/camelCase')
const _upperFirst = require('lodash/upperFirst')

/**
 * Scaffold Component
 * - 1st argument = name of component
 * - 2nd argument (optional) = parent directory of component
 */

try {
  // Get arguments
  const componentName = process.argv[2]
  if (!componentName) throw new Error('Must specify component name')

  const parentDir =
    process.argv[3] || path.resolve(__dirname, '../../components')

  // Convert name to casings
  const kebabName = _kebabCase(componentName)
  const camelName = _camelCase(componentName)
  const pascalName = _upperFirst(camelName)

  // Read templates
  const jsTemplate = fs.readFileSync(`${__dirname}/js-template.txt`, 'utf8')
  const scssTemplate = fs.readFileSync(`${__dirname}/scss-template.txt`, 'utf8')

  // Create directory
  if (fs.existsSync(path.resolve(parentDir, kebabName)))
    throw new Error('Directory already exists')
  fs.mkdirSync(path.resolve(parentDir, kebabName))

  // Write SCSS File
  let scssFileContent = scssTemplate.replace(/\$KEBAB/g, kebabName)
  scssFileContent = scssFileContent.replace(/\$CAMEL/g, camelName)
  scssFileContent = scssFileContent.replace(/\$PASCAL/g, pascalName)
  fs.writeFileSync(
    path.resolve(parentDir, kebabName, `./${kebabName}.module.scss`),
    scssFileContent,
  )

  // Write JS File
  let jsFileContent = jsTemplate.replace(/\$KEBAB/g, kebabName)
  jsFileContent = jsFileContent.replace(/\$CAMEL/g, camelName)
  jsFileContent = jsFileContent.replace(/\$PASCAL/g, pascalName)
  fs.writeFileSync(
    path.resolve(parentDir, kebabName, './index.js'),
    jsFileContent,
  )
} catch (err) {
  console.error(err)
}
