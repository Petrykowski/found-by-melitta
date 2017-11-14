import Paper, { Project, Tool } from 'paper';

const activeScopes = [];
const paperScopes = {};
let recentTool = null;
window.Paper = Paper

const createNewScope = (canvasElement) => {
  const scope = new Project(canvasElement);
  const newScopeId = Object.keys(paperScopes).length;
  paperScopes[newScopeId] = scope;
  return [newScopeId, scope];
};

const activateScope = (scopeId) => {
  Paper.project = paperScopes[scopeId];
  if (scopeId > 0){
    const recentScopeId = activeScopes[activeScopes.length - 1];
    let newTool = new Tool();
    recentTool = Object.assign(newTool, paperScopes[recentScopeId]['_scope'].tool);
    paperScopes[recentScopeId]['_scope'].tool.remove();
  }
};

// Has to be called from componentDidMount as canvasElement needs to be defined
export const bindCanvasToScope = (scopeId, canvasRef) => {
  const scopeInformation = createNewScope(canvasRef);
  const scope = scopeInformation[1];

  Paper.projects.push(scope);

  return scopeInformation;
};

export const enableScope = (scopeId) => {
  activateScope(scopeId);

  // Remove id from activeScopes if already exists
  const scopeIndex = activeScopes.indexOf(scopeId);
  if (scopeIndex > -1) {
    activeScopes.splice(scopeIndex);
  }

  activeScopes.push(scopeId);
};

export const disableScope = (scopeId) => {
  // Remove id from activeScopes array
  const topId = activeScopes[activeScopes.length - 1];
  if (topId === scopeId) {
    activeScopes.pop();
  }
  // Reactivate recent scope
  const recentScopeId = activeScopes[activeScopes.length - 1];

  if (typeof recentScopeId !== 'undefined') {
    activateScope(recentScopeId);
    paperScopes[recentScopeId]['_scope'].tool = recentTool;
  }

};