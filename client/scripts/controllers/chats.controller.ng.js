angular.module('Whatsapp').controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl($scope, $ionicModal) {
  $scope.chats = $scope.$meteorCollection(Chats, false);

  $ionicModal.fromTemplateUrl('client/templates/new-chat.ng.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  $scope.openNewChatModal = openNewChatModal;
  $scope.remove = remove;

  function remove(chat) {
    $meteor.call('removeChat', chat._id);
  }

  function openNewChatModal () {
    $scope.modal.show();
  }
}
